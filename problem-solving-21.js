// firs buttn id 
document.getElementById('submit-comment').addEventListener('click', function(){
    // seceon step commentbox  findid
    const commentBox = document.getElementById('new-comment')
    

    const newComment = document.createElement('p');
    newComment.innerText  = commentBox.value;

    const commenContainer = document.getElementById('comment-container')
    commenContainer.appendChild(newComment);

})