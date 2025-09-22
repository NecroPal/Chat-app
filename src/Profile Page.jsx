import { useState } from 'react'
import './Profile Page.css'

function App() {  

  return (
    <>
  <div class = "Container"> 
    <div class="content">
    <h1>Profile Settings</h1>
    <form class="profile-form">
      
      <!-- Profile Picture -->
      <div class="profile-picture">
        <div class="avatar" id="avatar">
          <i class="fa fa-user"></i>
        </div>
        <label for="upload-logo" class="edit-icon">
          <i class="fa fa-pen"></i>
        </label>
        <input type="file" id="upload-logo" accept="image/*" style="display: none;">
      </div>

      <!-- Two-column form grid -->
      <div class="form-grid">
        <div class="form-group">
          <label for="name">Full Name</label>
          <input type="text" id="name" placeholder="Enter your name">
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email">
        </div>

        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" id="username" placeholder="Choose a username">
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <div class="password-container">
            <input type="password" id="password" placeholder="Enter new password">
            <i class="fa fa-eye toggle-password" id="togglePassword"></i>
          </div>
        </div>

        <div class="form-group">
          <label for="dob">Date of Birth</label>
          <input type="date" id="dob">
        </div>

        <div class="form-group">
          <label for="phone">Phone Number</label>
          <input type="tel" id="phone" placeholder="Enter phone number">
        </div>

        <div class="form-group">
          <label for="gender">Gender</label>
          <select id="gender">
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div class="form-group bio-group">
          <label for="bio">Bio</label>
          <textarea id="bio" placeholder="Tell us about yourself"></textarea>
        </div>
      </div>

      <button type="submit">Save Changes</button>
    </form>
  </div>
  </div>

  <script>
    // Profile Picture Upload
    const uploadInput = document.getElementById('upload-logo');
    const avatarDiv = document.getElementById('avatar');

    uploadInput.addEventListener('change', (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          avatarDiv.style.backgroundImage = `url('${e.target.result}')`;
          avatarDiv.innerHTML = '';
        };
        reader.readAsDataURL(file);
      }
    });

    // Toggle Password
    const passwordInput = document.getElementById('password');
    const togglePassword = document.getElementById('togglePassword');

    togglePassword.addEventListener('click', () => {
      const type = passwordInput.type === "password" ? "text" : "password";
      passwordInput.type = type;
      togglePassword.classList.toggle("fa-eye");
      togglePassword.classList.toggle("fa-eye-slash");
    });
  </script>
    </>
  )
}

export default App;