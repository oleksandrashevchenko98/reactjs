import Input from '../Input/input';
import Button from '../Button/button';

const Form = () => {
    return (
        <form className="login-form">
            <Input placeholder="Your full name" />
            <Button text="Login" />
        </form>
    );
};

export default Form;