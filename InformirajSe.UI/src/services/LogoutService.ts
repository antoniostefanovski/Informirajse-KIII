export class LogoutService {

    public async logout(): Promise<void> {
        try {
            const response = await fetch('http://api.informirajse.mk/api/logout', {
                credentials: 'include'
            });

            if(response.ok) {
                window.location.replace('http://informirajse.mk/');
            }
        }
        catch(error: any) {
            console.log('Error: ', error.message);
        }
    }

}