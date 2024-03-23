function EditProfile(){
    return(
        <div className="edit-profile">
            <h2>Edit Profile</h2>
            <form>
              <div>
                <label>Name:</label>
                <input type="text" />
              </div>
              <div>
                <label>Email:</label>
                <input type="email" />
              </div>
              <div>
                <label>Phone:</label>
                <input type="text" />
              </div>
              <div>
                <label>Password:</label>
                <input type="password" />
              </div>
              <div>
                <label>Confirm Password:</label>
                <input type="password" />
              </div>
              <button type="submit">Save Changes</button>
            </form>
          </div>
    )
}
export default EditProfile;