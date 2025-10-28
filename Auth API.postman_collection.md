{
	"info": {
		"_postman_id": "84727744-ace8-4c78-814a-fce228ed26c1",
		"name": "Auth API",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "46162492"
	},
	"item": [
		{
			"name": "Register",
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "Content-Type",
						"value": "application/json"
					},
					{
						"key": "Authorization",
						"value": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ZmUyM2M1ZDdkNzIyMjdjNTcwOWRlZCIsImVtYWlsIjoiYmF0aHVAZ21haWwuY29tIiwidXNlcm5hbWUiOiJiYXRodSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzYxNDg1ODI0LCJleHAiOjE3NjIwOTA2MjR9.48UHSKubJH7FCy8KIWibVFvgK3ceqAK2gt426iluRHQ",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"username\": \"dayas\",\n  \"email\": \"dayas@gmail.com\",\n  \"password\": \"secret12345\"\n}"
				},
				"url": {
					"raw": "https://userauthwithjwt.onrender.com/api/auth/register",
					"protocol": "https",
					"host": [
						"userauthwithjwt",
						"onrender",
						"com"
					],
					"path": [
						"api",
						"auth",
						"register"
					]
				}
			},
			"response": [
				{
					"name": "Register",
					"originalRequest": {
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "Authorization",
								"value": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ZmUyM2M1ZDdkNzIyMjdjNTcwOWRlZCIsImVtYWlsIjoiYmF0aHVAZ21haWwuY29tIiwidXNlcm5hbWUiOiJiYXRodSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzYxNDg1ODI0LCJleHAiOjE3NjIwOTA2MjR9.48UHSKubJH7FCy8KIWibVFvgK3ceqAK2gt426iluRHQ",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n  \"username\": \"dayas\",\n  \"email\": \"dayas@gmail.com\",\n  \"password\": \"secret12345\"\n}"
						},
						"url": {
							"raw": "https://userauthwithjwt.onrender.com/api/auth/register",
							"protocol": "https",
							"host": [
								"userauthwithjwt",
								"onrender",
								"com"
							],
							"path": [
								"api",
								"auth",
								"register"
							]
						}
					},
					"status": "Created",
					"code": 201,
					"_postman_previewlanguage": null,
					"header": [
						{
							"key": "Date",
							"value": "Tue, 28 Oct 2025 18:52:50 GMT"
						},
						{
							"key": "Content-Type",
							"value": "application/json; charset=utf-8"
						},
						{
							"key": "Content-Length",
							"value": "42"
						},
						{
							"key": "Connection",
							"value": "keep-alive"
						},
						{
							"key": "CF-RAY",
							"value": "995ca1eadb9f4fd4-MAA"
						},
						{
							"key": "Content-Encoding",
							"value": "br"
						},
						{
							"key": "etag",
							"value": "W/\"2a-nMoFx54+czTntmSLXl3mqIsZV4A\""
						},
						{
							"key": "rndr-id",
							"value": "f8ef3e30-dff6-4849"
						},
						{
							"key": "vary",
							"value": "Accept-Encoding"
						},
						{
							"key": "x-powered-by",
							"value": "Express"
						},
						{
							"key": "x-render-origin-server",
							"value": "Render"
						},
						{
							"key": "cf-cache-status",
							"value": "DYNAMIC"
						},
						{
							"key": "Server",
							"value": "cloudflare"
						},
						{
							"key": "alt-svc",
							"value": "h3=\":443\"; ma=86400"
						}
					],
					"cookie": [],
					"body": "{\n    \"message\": \"User registered successfully\"\n}"
				}
			]
		},
		{
			"name": "Login",
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "Content-Type",
						"value": "application/json"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"email\": \"dayas@gmail.com\",\n  \"password\": \"secret12345\"\n}"
				},
				"url": {
					"raw": "https://userauthwithjwt.onrender.com/api/auth/login",
					"protocol": "https",
					"host": [
						"userauthwithjwt",
						"onrender",
						"com"
					],
					"path": [
						"api",
						"auth",
						"login"
					]
				}
			},
			"response": [
				{
					"name": "Login",
					"originalRequest": {
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n  \"email\": \"dayas@gmail.com\",\n  \"password\": \"secret12345\"\n}"
						},
						"url": {
							"raw": "https://userauthwithjwt.onrender.com/api/auth/login",
							"protocol": "https",
							"host": [
								"userauthwithjwt",
								"onrender",
								"com"
							],
							"path": [
								"api",
								"auth",
								"login"
							]
						}
					},
					"status": "OK",
					"code": 200,
					"_postman_previewlanguage": null,
					"header": [
						{
							"key": "Date",
							"value": "Tue, 28 Oct 2025 18:59:20 GMT"
						},
						{
							"key": "Content-Type",
							"value": "application/json; charset=utf-8"
						},
						{
							"key": "Content-Length",
							"value": "233"
						},
						{
							"key": "Connection",
							"value": "keep-alive"
						},
						{
							"key": "CF-RAY",
							"value": "995cab713a9dc728-MAA"
						},
						{
							"key": "Content-Encoding",
							"value": "br"
						},
						{
							"key": "etag",
							"value": "W/\"116-6zsRhbhYf6xNoZcPTmjNKKztOCw\""
						},
						{
							"key": "rndr-id",
							"value": "899a4e6d-1a81-4fe2"
						},
						{
							"key": "vary",
							"value": "Accept-Encoding"
						},
						{
							"key": "x-powered-by",
							"value": "Express"
						},
						{
							"key": "x-render-origin-server",
							"value": "Render"
						},
						{
							"key": "cf-cache-status",
							"value": "DYNAMIC"
						},
						{
							"key": "Server",
							"value": "cloudflare"
						},
						{
							"key": "alt-svc",
							"value": "h3=\":443\"; ma=86400"
						}
					],
					"cookie": [],
					"body": "{\n    \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5MDExMTAyNzY3ZDFjYTM3MDhiYzI0NyIsImVtYWlsIjoiZGF5YXNAZ21haWwuY29tIiwidXNlcm5hbWUiOiJkYXlhcyIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzYxNjc3OTYwLCJleHAiOjE3NjIyODI3NjB9.J-qEaAlpoCBHaPcDY6rQn93oFtMEiU3va2QqKUzz8m4\",\n    \"expiresIn\": \"7d\"\n}"
				}
			]
		},
		{
			"name": "Get Profile",
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "Content-Type",
						"value": "application/json"
					},
					{
						"key": "Authorization",
						"value": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5MDExMTAyNzY3ZDFjYTM3MDhiYzI0NyIsImVtYWlsIjoiZGF5YXNAZ21haWwuY29tIiwidXNlcm5hbWUiOiJkYXlhcyIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzYxNjc3OTYwLCJleHAiOjE3NjIyODI3NjB9.J-qEaAlpoCBHaPcDY6rQn93oFtMEiU3va2QqKUzz8m4"
					}
				],
				"url": {
					"raw": "https://userauthwithjwt.onrender.com/api/auth/profile",
					"protocol": "https",
					"host": [
						"userauthwithjwt",
						"onrender",
						"com"
					],
					"path": [
						"api",
						"auth",
						"profile"
					]
				}
			},
			"response": [
				{
					"name": "Get Profile",
					"originalRequest": {
						"method": "GET",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "Authorization",
								"value": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5MDExMTAyNzY3ZDFjYTM3MDhiYzI0NyIsImVtYWlsIjoiZGF5YXNAZ21haWwuY29tIiwidXNlcm5hbWUiOiJkYXlhcyIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzYxNjc3OTYwLCJleHAiOjE3NjIyODI3NjB9.J-qEaAlpoCBHaPcDY6rQn93oFtMEiU3va2QqKUzz8m4"
							}
						],
						"url": {
							"raw": "https://userauthwithjwt.onrender.com/api/auth/profile",
							"protocol": "https",
							"host": [
								"userauthwithjwt",
								"onrender",
								"com"
							],
							"path": [
								"api",
								"auth",
								"profile"
							]
						}
					},
					"status": "OK",
					"code": 200,
					"_postman_previewlanguage": null,
					"header": [
						{
							"key": "Date",
							"value": "Tue, 28 Oct 2025 19:00:56 GMT"
						},
						{
							"key": "Content-Type",
							"value": "application/json; charset=utf-8"
						},
						{
							"key": "Content-Length",
							"value": "128"
						},
						{
							"key": "Connection",
							"value": "keep-alive"
						},
						{
							"key": "CF-RAY",
							"value": "995cadc9cb6fc69f-MAA"
						},
						{
							"key": "Content-Encoding",
							"value": "br"
						},
						{
							"key": "etag",
							"value": "W/\"bc-x48vGVpmVb+Jw34QvMfu3ZIQGuk\""
						},
						{
							"key": "rndr-id",
							"value": "2be445f5-0ab7-46fc"
						},
						{
							"key": "vary",
							"value": "Accept-Encoding"
						},
						{
							"key": "x-powered-by",
							"value": "Express"
						},
						{
							"key": "x-render-origin-server",
							"value": "Render"
						},
						{
							"key": "cf-cache-status",
							"value": "DYNAMIC"
						},
						{
							"key": "Server",
							"value": "cloudflare"
						},
						{
							"key": "alt-svc",
							"value": "h3=\":443\"; ma=86400"
						}
					],
					"cookie": [],
					"body": "{\n    \"user\": {\n        \"_id\": \"69011102767d1ca3708bc247\",\n        \"username\": \"dayas\",\n        \"email\": \"dayas@gmail.com\",\n        \"role\": \"user\",\n        \"createdAt\": \"2025-10-28T18:52:50.610Z\",\n        \"updatedAt\": \"2025-10-28T18:52:50.610Z\",\n        \"__v\": 0\n    }\n}"
				}
			]
		}
	]
}