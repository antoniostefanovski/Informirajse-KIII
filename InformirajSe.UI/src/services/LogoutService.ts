export class LogoutService {

    public async logout(): Promise<void> {
        try {
            const response = await fetch('http://localhost:6501/api/logout', {
                credentials: 'include'
            });

            if(response.ok) {
                window.location.replace('http://localhost:3000/');
            }
        }
        catch(error: any) {
            console.log('Error: ', error.message);
        }
    }

}