import React from "react";
import './routes.css'

interface IndexableInterface {
    [key: string]: string
}

interface ContactState extends IndexableInterface {
    name: string,
    email: string,
    subject: string,
    message: string
}

interface ContactProps {
}

const initialState: ContactState = {
    name: "Name",
    email: "Email",
    subject: "Subject",
    message: "Message"
}

class Contact extends React.Component {
    state: ContactState;

    constructor(props: ContactProps) {
        super(props);
        this.state = initialState;

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.genTextAreas = this.genTextAreas.bind(this);
    }

    handleClick(attribute: string, event: React.MouseEvent<HTMLTextAreaElement>) {
        if (this.state[attribute] === initialState[attribute]) {
            let newState: ContactState = {...this.state};
            newState[attribute] = "";
            this.setState(newState);
        }
    }

    handleChange(attribute: string, event: React.ChangeEvent<HTMLTextAreaElement>) {
        let newState: ContactState = {...this.state};
        newState[attribute] = event.target.value || "";
        this.setState(newState);
    }

    genTextAreas() {
        let textAreas: Array<JSX.Element> = [];
        for (let attribute in this.state) {
            textAreas.push(
                    <textarea value={this.state[attribute]}
                              onChange={(e) => this.handleChange(attribute, e)}
                              onClick={(e) => this.handleClick(attribute, e)}/>
            )
        }
        return textAreas;
    }

    render() {
        return (
                <div className="contact">
                    <p>Contact Me</p>
                    <form>
                        <label>{this.genTextAreas()}</label>
                    </form>
                </div>
        );
    }
}

export default Contact;