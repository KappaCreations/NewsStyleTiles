import { useRef,useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { addToNewsletter } from "../../store/utils/thunks";

const  Newsletter = () => {
    const textInput = useRef();

    const handleSubmit = (e) =>{
        e.preventDefault();
        const value = textInput.current.value;

        dispatchEvent(addToNewsletter({email:value}))
    }
    return(
       <div className="newsletter_container">
        <h1>Join our newsletter</h1>
        <div className="form">
            <Form onSubmit={handleSubmit} className='mt-4'></Form>
            <Form.Group>
                <Form className="mt-4">
                <Form.Control
                type='text'
                placeholder='EXAMPLE: youremail@gmail.com'
                name="email"
                ref={textInput}
                />
            </Form>
            <Button className='mt-4' variant="primary" type="submit">
                Add me to the list
            </Button>
            </Form.Group>
            
        </div>
       </div>
    )
}

export default Newsletter;