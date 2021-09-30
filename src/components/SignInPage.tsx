import { AuthenticationDetails, getCognitoUser } from '../utils/CognitoUtility'
import * as React from 'react'


const SignInPage: React.FC = () => {
    const [userName, setUserName] = React.useState<string>('')
    const [password, setPassword] = React.useState<string>('')

    const handleUserNameChange = (event: React.FormEvent<HTMLInputElement>) => {
        setUserName(event.currentTarget.value)
    }

    const handlePasswordChange = (event: React.FormEvent<HTMLInputElement>) => {
        setPassword(event.currentTarget.value)
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        getCognitoUser(userName).authenticateUser(
            new AuthenticationDetails({ Username: userName, Password: password }),
            {
                onSuccess: (result: any) => {
                    alert(`ID Token: ${result.getIdToken().getJwtToken()}`)
                },
                onFailure: () => {
                    alert('Error!')
                }
            }
        )
    }

    return (
        <div className="contents">
        {
            <form onSubmit={handleSubmit}>
                <input className="input" type="text" value={userName} onChange={handleUserNameChange} placeholder="Login ID" /><br />
                <input className="input" type="password" value={password} onChange={handlePasswordChange} placeholder="Password" /><br />
                <input className="button" type='submit' value="Sign In" />
            </form>
        }
        </div> 
    )
}

export default SignInPage
