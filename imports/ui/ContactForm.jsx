import React from 'react'

export const ContactForm = () => {
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [image, setImageUrl] = React.useState('')

    const saveContact = (event) => {
        event.preventDefault();
        console.log('Saving contact');
    }
    return (<form>
        <div>
            <label className={'text-red-100'} htmlFor="name">Name</label>
            <input id="name" type="text" name="name" placeholder="Name"
                   onChange={(e) => setName(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="email">email</label>
            <input id="email" type="email" name="email" placeholder="email"
                   onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div>
            <label htmlfor="imageurl">Image URL</label>
            <input id="imageurl" type="text" name="imageurl" placeholder="Image URL"
                   onChange={(e) => setImageUrl(e.target.value)}/>
        </div>
        <div>
            <button type="submit">Submit</button>
        </div>
    </form>)
};

