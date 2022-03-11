import FeedbackItem from './FeedbackItem'


function FeedbackList({ feedback, handleDelete }) {
  if(!feedback || feedback.length === 0){
      return <p>No Feedback yet</p>
  }

    return (
    <div cllasName="feedback-list">
        {feedback.map(item => (
            <FeedbackItem key={item.id} item={item} handleDelete={() => handleDelete(item.id)}/>
        ))}
    </div>
  )
}

export default FeedbackList