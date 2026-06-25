import requests
import sys
from datetime import datetime

class PortfolioAPITester:
    def __init__(self, base_url="https://abdul-azis-dev.preview.emergentagent.com"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0
        self.failed_tests = []

    def run_test(self, name, method, endpoint, expected_status, data=None, check_response=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
        headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"   URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=10)

            print(f"   Status: {response.status_code}")
            
            success = response.status_code == expected_status
            
            if success:
                # Additional response validation if provided
                if check_response:
                    try:
                        response_data = response.json()
                        if not check_response(response_data):
                            success = False
                            print(f"❌ Failed - Response validation failed")
                            self.failed_tests.append(f"{name}: Response validation failed")
                        else:
                            self.tests_passed += 1
                            print(f"✅ Passed")
                    except Exception as e:
                        success = False
                        print(f"❌ Failed - Response check error: {str(e)}")
                        self.failed_tests.append(f"{name}: Response check error - {str(e)}")
                else:
                    self.tests_passed += 1
                    print(f"✅ Passed")
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                try:
                    print(f"   Response: {response.text[:200]}")
                except:
                    pass
                self.failed_tests.append(f"{name}: Expected {expected_status}, got {response.status_code}")

            return success, response.json() if response.status_code < 500 else {}

        except requests.exceptions.Timeout:
            print(f"❌ Failed - Request timeout")
            self.failed_tests.append(f"{name}: Request timeout")
            return False, {}
        except requests.exceptions.ConnectionError:
            print(f"❌ Failed - Connection error")
            self.failed_tests.append(f"{name}: Connection error")
            return False, {}
        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            self.failed_tests.append(f"{name}: {str(e)}")
            return False, {}

    def test_root_endpoint(self):
        """Test GET /api/ returns running message"""
        success, response = self.run_test(
            "GET /api/ - Root endpoint",
            "GET",
            "api/",
            200,
            check_response=lambda r: "message" in r and "running" in r["message"].lower()
        )
        return success

    def test_create_contact_valid(self):
        """Test POST /api/contact with valid data"""
        test_data = {
            "name": f"Test User {datetime.now().strftime('%H%M%S')}",
            "email": "test@example.com",
            "message": "This is a test message from automated testing."
        }
        
        def check_response(r):
            # Should return id and created_at
            if "id" not in r:
                print(f"   Missing 'id' in response")
                return False
            if "created_at" not in r:
                print(f"   Missing 'created_at' in response")
                return False
            if r.get("name") != test_data["name"]:
                print(f"   Name mismatch: expected {test_data['name']}, got {r.get('name')}")
                return False
            if r.get("email") != test_data["email"]:
                print(f"   Email mismatch: expected {test_data['email']}, got {r.get('email')}")
                return False
            print(f"   ✓ Response contains id: {r['id']}")
            print(f"   ✓ Response contains created_at: {r['created_at']}")
            return True
        
        success, response = self.run_test(
            "POST /api/contact - Valid data",
            "POST",
            "api/contact",
            200,
            data=test_data,
            check_response=check_response
        )
        return success, response

    def test_get_contact_messages(self):
        """Test GET /api/contact returns saved messages"""
        success, response = self.run_test(
            "GET /api/contact - List messages",
            "GET",
            "api/contact",
            200,
            check_response=lambda r: isinstance(r, list)
        )
        if success:
            print(f"   ✓ Found {len(response)} contact messages")
        return success

    def test_create_contact_invalid_email(self):
        """Test POST /api/contact with invalid email returns 422"""
        test_data = {
            "name": "Test User",
            "email": "invalid-email",  # Invalid email format
            "message": "This should fail validation."
        }
        
        success, response = self.run_test(
            "POST /api/contact - Invalid email (should return 422)",
            "POST",
            "api/contact",
            422,
            data=test_data
        )
        return success

    def test_create_contact_missing_fields(self):
        """Test POST /api/contact with missing required fields"""
        test_data = {
            "name": "Test User"
            # Missing email and message
        }
        
        success, response = self.run_test(
            "POST /api/contact - Missing fields (should return 422)",
            "POST",
            "api/contact",
            422,
            data=test_data
        )
        return success

def main():
    print("=" * 70)
    print("🚀 Abdul Azis Portfolio - Backend API Testing")
    print("=" * 70)
    
    tester = PortfolioAPITester()

    # Run all tests
    print("\n📋 Running Backend Tests...\n")
    
    # Test 1: Root endpoint
    tester.test_root_endpoint()
    
    # Test 2: Create contact with valid data
    tester.test_create_contact_valid()
    
    # Test 3: Get contact messages
    tester.test_get_contact_messages()
    
    # Test 4: Invalid email validation
    tester.test_create_contact_invalid_email()
    
    # Test 5: Missing fields validation
    tester.test_create_contact_missing_fields()

    # Print summary
    print("\n" + "=" * 70)
    print(f"📊 Test Summary")
    print("=" * 70)
    print(f"Total tests run: {tester.tests_run}")
    print(f"Tests passed: {tester.tests_passed}")
    print(f"Tests failed: {tester.tests_run - tester.tests_passed}")
    print(f"Success rate: {(tester.tests_passed / tester.tests_run * 100):.1f}%")
    
    if tester.failed_tests:
        print("\n❌ Failed Tests:")
        for failed in tester.failed_tests:
            print(f"   - {failed}")
    else:
        print("\n✅ All tests passed!")
    
    print("=" * 70)
    
    return 0 if tester.tests_passed == tester.tests_run else 1

if __name__ == "__main__":
    sys.exit(main())
