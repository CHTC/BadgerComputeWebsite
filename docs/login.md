import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import AlertDropDown from "@/components/AlertDropDown";

# Log in to BadgerCompute

Use this guide to sign in to **BadgerCompute**, our Jupyter notebook service, and launch your notebook server.

> **At a glance** <br>
> 1) Go to the BadgerCompute Launch URL → 2) Login with your NetID → 3) Approve sign-in using Duo 2FA → 4) Pick a server option → 5) Start your server.


## Prerequisites

- You have an active NetID
- You have completed the required [BadgerCompute Certification Course](/get-started/#canvas-course)
    - **Annual renewal may be required.**


## Step-by-step login

1. **Open the BadgerCompute Launch URL**
    
    Visit the BadgerCompute launch page:<br>  
    <a href="https://launch.badgercompute.wisc.edu" >
    <img src="/docs/get-started-login.png" alt="Log in an launch BadgerCompute" style={{height: '120px', width: 'auto'}} />
    </a>

2. **Click “Sign in with your UW-Madison NetID”**

    You’ll be redirected to the **UW-Madison Single sign-on** login page. Login with your NetID and password.
    
    ![Welcome-light](/docs/login-guide/Welcome-to-BadgerCompute-light.png)

3. **Return to BadgerCompute**

    After successful SSO, you’ll land back on the **JupyterHub** page for BadgerCompute.
    
    ![Image title](/docs/login-guide/netid-login.png)
    
    <Alert severity="info" sx={{ mb: 3 }}>
      <AlertTitle>Two Factor Authentication (2FA)</AlertTitle>
      You will likely be prompted for 2FA to approve the sign-in via Duo or your chosen method. <br><br>
        ![Image title](/docs/login-guide/Duo-code.png)
    </Alert>

4. **(First time only) Review/accept any terms (if applicable)** 

    If presented with usage terms and conditions, complete it once. You won’t be asked again unless policies change.

5. **Choose your server options**

    You may see:

     * Basic Data Science
     * GPU-Accelerated PyTorch
     * GPU-Accelerated TensorFlow
     * Other Docker image (advanced)
     * Build your own image (advanced)

     ![Image title](/docs/login-guide/select-notebook-template-light.png) 

     Select the option that fits your workload and click **Start**.


8. **Wait for the server to start**

    You’ll see **“Your server is starting up…”** for ~30–90 seconds (longer during peak times). When ready, you’ll land in **JupyterLab**.
    
    ![Image title](/docs/login-guide/notebook-starting-light.png)

    <Alert severity="info" sx={{ mb: 3 }}>
      <AlertTitle>If it takes too long</AlertTitle>
      YIf it takes >3 minutes, refresh the page once. If it still doesn’t start, try a different image. Please note, servers may take longer to start during peak usage times. BadgerCompute is a shared resource and availability is not guaranteed.
    </Alert>

9. **You’re in!** Start working in JupyterLab.
    
    You can create notebooks, open terminals, and manage files. 
    
    ![Image title](/docs/login-guide/jupyter-lab.png)


## After you log in

- **You’re in JupyterLab.** Use the Launcher to open notebooks (`.ipynb`), terminals, or text editors. See our [Welcome to BadgerCompute](hello-jupyter) page for an example 
data analysis! 
- **Your files live in your home directory.** Anything under your home persists across restarts unless otherwise noted by your site’s storage policy.
- **To end your session:** _File → Log Out_ (JupyterLab) and optionally **Stop My Server** on the Hub page to free resources.

<Alert severity="success" sx={{ mb: 3 }}>
  <AlertTitle>Come back later</AlertTitle>
  Bookmark the link [launch.badgercompute.wisc.edu](https://launch.badgercompute.wisc.edu). When you return, you’ll usually go straight in via SSO unless your session expired (you’ll be prompted to sign in again). Your notebook may be stopped if idle, but files in your `/work` directory persist for 30 days.
</Alert>

## Troubleshooting

<AlertDropDown title="I get a **Not Authorized** page" severity="error">
    Your account may not be provisioned yet. You must complete the Canvas course and pass all checks before your account can be created. Accounts may take upto 24hrs to be activated. If you believe this is in error, contact support (see below).
</AlertDropDown>

<AlertDropDown title="Stuck on **Server starting…**" severity="error">
	Refresh the page once. If it persists for >2–3 minutes:<br>
    1) Click **Stop My Server**,  
    2) Click **Start My Server** again,  
    3) If it still fails, try a different server size or image and contact support with the approximate time and chosen options.
    <br><br>
    **Note: Servers may take longer to start during peak usage times. BadgerCompute is a shared resource and availability is not guaranteed.**
</AlertDropDown>

<AlertDropDown title="I am getting a 400: Bad Request" error" severity="error">
    This can happen if you already have an active session and try to start a new one. You can return to your previous session or stop it from the [Hub page](https://badgerhub.jupyter-uw-prod.chtc.io/hub/home). If the issue persists, try logging out and back in, or clear your cookies.
</AlertDropDown>


## Sign-out, timeouts, and idle culling

- **Sign-out:** From JupyterLab, use _File → Log Out_. On the Hub page, you can also **Stop My Server**.
- **Timeouts:** To keep capacity available, servers **will** be shut down automatically after a period of 4hrs since the start of the session. Files in your /work directory persist for 30 days. All other data may be deleted upon server shutdown.
- **Session expiration:** Your SSO session will periodically require re-authentication (especially after closing the browser or long idle periods).


## Privacy & data notes

- **Authentication:** You will authenticate via UW-Madison SSO (NetID). Refer to [UW-Madison's Privacy Notice](https://www.wisc.edu/privacy-notice/) for details on how your data is handled.
- **Files:** Stored in your BadgerCompute home or attached volumes according to the [BadgerCompute policy](/policies#data-retention-policy).
- **Compute usage tracking:** We track aggregate usage metrics to improve the service and plan capacity.


## Support

If you hit issues or need access:

- 💬 **Support Forum:** `community.badgerhub.wisc.edu`
- 📚 **Docs:** `docs.badgercompute.wisc.edu`
