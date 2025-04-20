import { useState } from "react";
import styles from "./css-style/Profile.module.css";
import photo from "./images_icons/user.jpg"; // Default user image

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Aman Gupta",
    email: "amangupta@example.com",
    phone: "+91 9876543210",
    address: "123 Street, City, India",
    roll: "RG2025-001",
    standard: "5th Standard",
    photo: null,
  });

  const handleEdit = () => setIsEditing(!isEditing);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfile({ ...profile, photo: imageUrl });
    }
  };

  const handleCertificate = (type) => {
    alert(`${type} Certificate is being generated...`);
  };

  return (
    <div className={styles.profileContainer}>
      <h2 className={styles.profileTitle}>🎓 Student Profile</h2>

      {/* Profile Image */}
      <div className={styles.profileImageSection}>
        <img
          src={photo}
          alt="Profile"
          className={styles.profileImage}
        />
        {isEditing && (
          <input type="file" accept="image/*" onChange={handleImageUpload} />
        )}
      </div>

      {/* Details */}
      <div className={styles.profileDetails}>
        {["name", "email", "phone", "address", "roll", "standard"].map((key) => (
          <div key={key} className={styles.profileField}>
            <label className={styles.profileLabel}>
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </label>
            {isEditing ? (
              <input
                type="text"
                name={key}
                value={profile[key]}
                onChange={handleChange}
                className={styles.profileInput}
              />
            ) : (
              <p className={styles.profileText}>{profile[key]}</p>
            )}
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className={styles.profileButtonContainer}>
        <button onClick={handleEdit} className={styles.profileButton}>
          {isEditing ? "💾 Save" : "✏️ Edit Profile"}
        </button>
        <button
          onClick={() => handleCertificate("Result")}
          className={styles.generateButton}
        >
          📄 Generate Result
        </button>
        <button
          onClick={() => handleCertificate("Bonafide")}
          className={styles.generateButton}
        >
          🏫 Bonafide Certificate
        </button>
      </div>
    </div>
  );
};

export default Profile;
