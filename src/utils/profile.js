const userProfile = () => {
    const user = localStorage.getItem('USER');
    return user ? JSON.parse(user) : {}
}
export const getCurrenUser = () => {
    const profile = userProfile();
    return profile.name ? profile.name : 'Guest';
}
export default userProfile;