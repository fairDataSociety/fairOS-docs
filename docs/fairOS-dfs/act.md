---
id: act
title: Access Control Trie
---

### Overview
We have introduced a new feature that integrates Swarm's Access Control Trie (ACT) into fairOS-dfs to enable user-based access control. This enhancement allows for more granular permissions and secure data sharing among users.

### What is ACT?
The Access Control Trie (ACT) is a mechanism provided by Swarm for managing access permissions to resources stored on the Swarm network. It allows publishers to grant or revoke access to specific grantees.

### How is ACT Integrated into fairOS-dfs?
In the native Swarm implementation, ACT is node-based and lacks the concept of users, which is not suitable for user-centric applications like fairOS-dfs. We have integrated ACT in such a way that:

- User-Based Initialization: Access control is initialized with a user's key, tying permissions directly to user identities.
- Grantee Management: Users can be added as grantees by their public keys, allowing specific users to access shared resources.
- Secure Sharing: Instead of sharing the pod sharing reference directly, we wrap that reference using ACT and share the wrapped actRef. This ensures that only authorized users can access the shared content, even if the actRef is obtained by others.

### Api Reference

### Create ACT with Grantee Public Key

#### Endpoint

```
POST /v1/act/grantee/{actName}?grantee={granteePublicKey}
```

#### Summary

Create a new ACT and grant access to a grantee.

#### Description

This endpoint creates a new ACT identified by `actName` and grants access to the grantee specified by their public key.

#### Parameters

- **actName** (path, required): Unique identifier for the new ACT.
- **grantee** (query, required): Public key of the grantee to be added to the ACT.
- **Cookie** (header, required): Authentication cookie obtained after user login.

#### Responses

- **201 Created**

  ```json
  {
    "message": "ACT created successfully."
  }
  ```

#### `curl` Example

```bash
curl -X POST "http://localhost:9090/v1/act/grantee/{actName}?grantee={granteePublicKey}" \
  -H "Cookie: {cookie_value}"
```

Replace `{actName}`, `{granteePublicKey}`, and `{cookie_value}` accordingly.

---

### Grant/Revoke Access in ACT

#### Endpoint

```
PATCH /v1/act/grantee/{actName}?grant={granteePublicKey}&revoke={granteePublicKey}
```

#### Summary

Grant or revoke access to an existing ACT.

#### Description

This endpoint allows you to grant access to new grantees or revoke access from existing grantees in the ACT identified by `actName`.

#### Parameters

- **actName** (path, required): Unique identifier of the ACT.
- **grant** (query, optional): Public key of the grantee to be granted access.
- **revoke** (query, optional): Public key of the grantee to have access revoked.
- **Cookie** (header, required): Authentication cookie obtained after user login.

#### Responses

- **200 OK**

  ```json
  {
    "message": "Access updated successfully."
  }
  ```

#### `curl` Examples

##### Grant Access

```bash
curl -X PATCH "http://localhost:9090/v1/act/grantee/{actName}?grant={granteePublicKey}" \
  -H "Cookie: {cookie_value}"
```

##### Revoke Access

```bash
curl -X PATCH "http://localhost:9090/v1/act/grantee/{actName}?revoke={granteePublicKey}" \
  -H "Cookie: {cookie_value}"
```

Replace `{actName}`, `{granteePublicKey}`, and `{cookie_value}` accordingly.

---

### List Grantees in ACT

#### Endpoint

```
GET /v1/act/grantee/{actName}
```

#### Summary

List grantees in a specific ACT.

#### Description

This endpoint retrieves the list of grantees (public keys) who have been granted access to the ACT identified by `actName`.

#### Parameters

- **actName** (path, required): Unique identifier of the ACT.
- **Cookie** (header, required): Authentication cookie obtained after user login.

#### Responses

- **200 OK**

  Returns an array of grantee public keys.

  ```json
  [
    "publicKey1",
    "publicKey2"
  ]
  ```

#### `curl` Example

```bash
curl -X GET "http://localhost:9090/v1/act/grantee/{actName}" \
  -H "Cookie: {cookie_value}"
```

Replace `{actName}` and `{cookie_value}` accordingly.

---

### List ACTs

#### Endpoint

```
GET /v1/act/list
```

#### Summary

List all ACTs created by the user.

#### Description

This endpoint retrieves a list of all ACTs that the authenticated user has created.

#### Parameters

- **Cookie** (header, required): Authentication cookie obtained after user login.

#### Responses

- **200 OK**

  Returns a JSON object containing all ACTs.

  ```json
  {
    "acts": {
      "ACTName": {
        "name": "ACTName",
        "historyRef": "string",
        "createdAt": "string",
        "granteesRef": "string",
        "content": [
          {
            "reference": "string",
            "owner": "string",
            "ownerPublicKey": "string",
            "topic": "string",
            "addedAt": "string"
          }
        ]
      }
    }
  }
  ```

#### `curl` Example

```bash
curl -X GET "http://localhost:9090/v1/act/list" \
  -H "Cookie: {cookie_value}"
```

Replace `{cookie_value}` accordingly.

---

### Share a Pod in ACT

#### Endpoint

```
POST /v1/act/share-pod/{actName}/{podName}
```

#### Summary

Share a pod using ACT.

#### Description

This endpoint adds a pod to an existing ACT, effectively sharing it with the grantees of the ACT.

#### Parameters

- **actName** (path, required): Unique identifier of the ACT.
- **podName** (path, required): Name of the pod to be shared.
- **Cookie** (header, required): Authentication cookie obtained after user login.

#### Responses

- **200 OK**

  Returns content information about the shared pod.

  ```json
  {
    "reference": "string",
    "owner": "string",
    "ownerPublicKey": "string",
    "topic": "string"
  }
  ```

#### `curl` Example

```bash
curl -X POST "http://localhost:9090/v1/act/share-pod/{actName}/{podName}" \
  -H "Cookie: {cookie_value}"
```

Replace `{actName}`, `{podName}`, and `{cookie_value}` accordingly.

---

### List Pods in ACT

#### Endpoint

```
GET /v1/act/act-shared-pods/{actName}
```

#### Summary

List the pods shared in a specific ACT.

#### Description

This endpoint retrieves a list of pods that have been shared within a given ACT identified by `actName`.

#### Parameters

- **actName** (path, required): Unique identifier of the ACT.
- **Cookie** (header, required): Authentication cookie obtained after user login.

#### Responses

- **200 OK**

  Returns an array of content objects representing the shared pods.

  ```json
  [
    {
      "reference": "string",
      "owner": "string",
      "ownerPublicKey": "string",
      "topic": "string",
      "addedAt": "string"
    }
  ]
  ```

#### `curl` Example

```bash
curl -X GET "http://localhost:9090/v1/act/act-shared-pods/{actName}" \
  -H "Cookie: {cookie_value}"
```

Replace `{actName}` and `{cookie_value}` accordingly.

---

### Save Shared ACT Pod

#### Endpoint

```
POST /v1/act/save-act-pod/{actName}
```

#### Summary

Save a shared pod in the ACT list.

#### Description

This endpoint saves a shared ACT pod to the user's ACT list. The content information about the pod must be provided in the request body.

#### Parameters

- **actName** (path, required): Unique identifier of the ACT.
- **content** (body, required): Information about the pod to be saved.
- **Cookie** (header, required): Authentication cookie obtained after user login.

#### Content Schema

```json
{
  "reference": "string",
  "owner": "string",
  "ownerPublicKey": "string",
  "topic": "string",
  "addedAt": "string"
}
```

#### Responses

- **200 OK**

  ```json
  {
    "message": "Pod saved successfully."
  }
  ```

#### `curl` Example

```bash
curl -X POST "http://localhost:9090/v1/act/save-act-pod/{actName}" \
  -H "Content-Type: application/json" \
  -H "Cookie: {cookie_value}" \
  -d '{
        "reference": "jkl012...",
        "owner": "hex123...",
        "ownerPublicKey": "def456...",
        "topic": "base64encodedstring....",
        "addedAt": "2023-10-02T12:37:00Z"
      }'
```

Replace `{actName}` and `{cookie_value}` accordingly, and provide the actual content data.

---

### Open ACT Pod

#### Endpoint

```
POST /v1/act/open-act-pod/{actName}
```

#### Summary

Open a shared pod using ACT.

#### Description

This endpoint allows a grantee to open a pod shared via ACT. The `actName` identifies the ACT to use for accessing the pod.

#### Parameters

- **actName** (path, required): Unique identifier of the ACT.
- **Cookie** (header, required): Authentication cookie obtained after user login.

#### Responses

- **200 OK**

  ```json
  {
    "message": "Pod opened successfully."
  }
  ```

#### `curl` Example

```bash
curl -X POST "http://localhost:9090/v1/act/open-act-pod/{actName}" \
  -H "Cookie: {cookie_value}"
```

Replace `{actName}` and `{cookie_value}` accordingly.

---