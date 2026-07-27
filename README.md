# 🚀 Lead Management CRM

A full-stack **Lead Management CRM** built with the **MERN Stack** to help businesses manage leads, assign them to team members, and track sales progress efficiently.


<img width="1517" height="688" alt="Screenshot 2026-07-27 143231" src="https://github.com/user-attachments/assets/5dfa8caf-8531-4ffe-a36a-452ac6804f16" />
<img width="1517" height="692" alt="Screenshot 2026-07-27 143251" src="https://github.com/user-attachments/assets/bb60248e-12f8-4692-932f-04d013985f7d" />


## ✨ Features

### Admin

* Dashboard & Analytics
* Create, Edit & Delete Leads
* Assign Leads to Members
* Manage Team Members
* Track Lead Activity
* Search, Filter & Pagination

### Member

* View Assigned Leads
* Update Lead Status
* Add Notes
* View Lead Details & Timeline

## 🛠 Tech Stack

* React.js
* TypeScript
* Tailwind CSS
* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication

## 📂 Project Structure

```text
backend/
frontend/
```

## 🔄 Workflow

```text
Admin
   ↓
Create Lead
   ↓
Assign Lead
   ↓
Member
   ↓
Update Status & Notes
   ↓
Admin Dashboard
```

## 📌 API

### Authentication

* `POST /api/auth/login`
* `POST /api/auth/register`

### Leads

* `GET /api/leads`
* `POST /api/leads`
* `PUT /api/leads/:id`
* `DELETE /api/leads/:id`
* `PUT /api/leads/:id/assign`

### Users

* `GET /api/users`
* `POST /api/users`
* `PUT /api/users/:id`
* `DELETE /api/users/:id`

## ⚙️ Installation

```bash
git clone <repository-url>

cd server
npm install
npm run dev

cd ../client
npm install
npm run dev
```

## 🔐 Environment Variables

```env
PORT=3000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
```

## 👨‍💻 Author

**Tulasi Shukla**
MERN Stack Developer
