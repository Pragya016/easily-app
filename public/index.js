function deleteJob(id) {
    const res = confirm('Are you sure you want to delete this job post?');
    if (res) {
        fetch('/jobs/job-details/' + id, {
            method : 'DELETE'
        }).then(res => {
            window.open('/jobs');
        })
    } else {

    }
}