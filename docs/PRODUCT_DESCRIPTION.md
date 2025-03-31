# HTTP Status Codes Documentation

## Success Codes (2xx)

| Status Code | Meaning |
|------------|---------|
| **200 OK** | Request was successful (GET, POST, PUT, DELETE). |
| **201 Created** | A new resource was successfully created (e.g., User Registration). |
| **202 Accepted** | Request has been accepted for processing but not completed yet. |
| **204 No Content** | Request was successful, but no content is returned (e.g., DELETE success). |

## Client Errors (4xx)

| Status Code | Meaning |
|------------|---------|
| **400 Bad Request** | Request contains invalid syntax or missing data (e.g., incorrect credentials). |
| **401 Unauthorized** | Authentication failed (e.g., invalid credentials, expired token). |
| **403 Forbidden** | User does not have permission to access the resource. |
| **404 Not Found** | Requested resource (route, user, etc.) was not found. |
| **405 Method Not Allowed** | HTTP method (GET, POST, PUT, DELETE) is not allowed on this endpoint. |
| **409 Conflict** | Duplicate data found (e.g., User already exists). |

## Server Errors (5xx)

| Status Code | Meaning |
|------------|---------|
| **500 Internal Server Error** | A generic server error occurred. |
| **502 Bad Gateway** | Server received an invalid response from an upstream service. |
| **503 Service Unavailable** | Server is temporarily unavailable (maintenance, overload). |
| **504 Gateway Timeout** | Server took too long to respond. |

## Mapped Status Codes for Your Project

| Purpose | Standard HTTP Code |
|--------------|-------------|
| **Login Success** | **200 OK** |
| **Registration Success** | **201 Created** |
| **User Not Found** | **404 Not Found** |
| **User Already Exists** | **409 Conflict** |
| **Post Success** | **201 Created** |
| **Get Success** | **200 OK** |
| **Updated Success** | **200 OK** |
| **Deleted Success** | **204 No Content** |
| **Login Error** | **401 Unauthorized** |
| **Registration Error** | **400 Bad Request** |
| **Cannot Write to DB** | **500 Internal Server Error** |
| **Cannot Read from DB** | **500 Internal Server Error** |
| **Route Not Found** | **404 Not Found** |
| **Deletion Unsuccessful** | **500 Internal Server Error** |
| **Updation Unsuccessful** | **500 Internal Server Error** |

This document ensures proper adherence to HTTP standards while maintaining clear API responses.

