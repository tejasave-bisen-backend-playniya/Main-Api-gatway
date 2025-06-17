✅ 1. Basic Setup Check
Ensure all services (NGINX + Express) are running:

NGINX on localhost:3001

Auth services on localhost:5007 and localhost:5009

✅ 2. Health Check via Load Balancer
Purpose: Test load balancing by hitting /auth/health multiple times.

Postman Request:

Method: GET

URL: http://localhost:3001/auth/health

Repeat 5–10 times, and you should see alternating responses if ports 5007 and 5009 return different messages.

🛠️ Tip: Change one of the service messages to make the difference visible (like add ...from 5009).

✅ 3. Auth Login – Success
Purpose: Test login with correct credentials.

Postman Request:

Method: POST

URL: http://localhost:3001/auth/login

Headers:

Content-Type: application/json

Authorization: Bearer dummy-token

Body (raw JSON):

json
Copy
Edit
{
  "username": "admin",
  "password": "password"
}
✅ Expected Response:

json
Copy
Edit
{
  "message": "username === 'admin' && password === 'password'"
}
✅ 4. Auth Login – Missing Authorization Header
Purpose: Test authorization check middleware.

Postman Request:

Same as above but remove the Authorization header.

⛔ Expected: 401 status with:

json
Copy
Edit
{
  "error": "Missing Authorization Header"
}
✅ 5. Register Endpoint Test
Postman Request:

Method: POST

URL: http://localhost:3001/auth/register

Headers:

Content-Type: application/json

Authorization: Bearer dummy-token

Body (raw JSON):

json
Copy
Edit
{
  "username": "tejas"
}
✅ Expected:

json
Copy
Edit
{
  "message": "User tejas registered successfully."
}
✅ 6. Rate Limiting Test
Purpose: Hit the same endpoint quickly (e.g., /auth/login) to exceed limit_req.

You can:

Use Postman’s Runner to send 20+ requests quickly.

Or use a tool like Apache Benchmark:

bash
Copy
Edit
ab -n 20 -c 1 -H "Authorization: Bearer test" -p payload.json -T application/json http://localhost:3001/auth/login
Expected: After threshold, you'll start receiving:

json
Copy
Edit
{
  "error": "Too Many Requests"
}
With HTTP status 429

✅ 7. IP Filtering Test
Purpose: Try from a blocked IP (like 192.168.1.100)

🔍 Ways to simulate:

Edit NGINX geo block to include your current IP from ipconfig or ifconfig.

nginx
Copy
Edit
geo $blocked_ip {
    default 0;
    127.0.0.1 1;  # block localhost for test
}
Reload NGINX:

bash
Copy
Edit
sudo nginx -s reload
Now request any endpoint like /auth/health from Postman.

Expected:

json
Copy
Edit
{
  "error": "Your IP is blocked"
}
With 403 Forbidden

✅ 8. Error Page Test
Try accessing an invalid path:

URL: http://localhost:3001/notfound

Expected:

json
Copy
Edit
{
  "error": "Internal server error"
}
With status code 500 (or 404 based on actual config)

✅ 9. Upstream Services Routing
Test other endpoints like:

http://localhost:3001/user/...

http://localhost:3001/wallet/...

http://localhost:3001/game/...

(You need to have mock services running on those ports.)