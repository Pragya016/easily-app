function deleteJob(id) {
    const confirmation = confirm('Are you sure you want to delete this job post?');
    if (confirmation) {
        fetch('/jobs/job-details/' + id, {
            method : 'DELETE'
        }).then(res => {
            window.open('/jobs');
        })
    }
}

function openJobDetails(jobId) {
    const currentUrl = window.location.href;
    const newUrl = `${currentUrl}/job-details/${jobId}`;
    window.open(newUrl, '_blank');
}

function handleLogoutUser() {
    const confirmation = confirm('Are you sure you want to logout?');
    if (confirmation) {
        fetch('/logout', {
            method: 'GET',
        })
            .then(response => {
                if (response.ok) {
                    // Redirect to the login page or homepage after logout
                    window.location.href = '/'; 
                } else {
                    alert('Logout failed. Please try again.');
                }
            })
            .catch(error => {
                console.error('Error logging out:', error);
                alert('An error occurred. Please try again.');
            });
    }
}
