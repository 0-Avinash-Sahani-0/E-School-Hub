import { useState } from "react";
import { motion } from "framer-motion";
// import { Button } from "/src/UI/Button";
// import { Input } from "/src/UI/Input";  
import "./css-style/Profile.css";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+91 9876543210",
    address: "123 Street, City, India",
  });

  const handleEdit = () => setIsEditing(!isEditing);
  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  return (
    <motion.div
      className="profile-container"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="profile-title">Profile</h2>
      <div className="profile-details">
        {Object.keys(profile).map((key) => (
          <div key={key} className="profile-field">
            <label className="profile-label">{key}</label>
            {isEditing ? (
              <Input
                type="text"
                name={key}
                value={profile[key]}
                onChange={handleChange}
                className="profile-input"
              />
            ) : (
              <p className="profile-text">{profile[key]}</p>
            )}
          </div>
        ))}
      </div>
      <div className="profile-button-container">
        <Button onClick={handleEdit} className="profile-button">
          {isEditing ? "Save" : "Edit Profile"}
        </Button>
      </div>
    </motion.div>
  );
};

export default Profile;
