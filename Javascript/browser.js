var OSName = "Unknown";
if (window.navigator.userAgent.indexOf("Windows NT 10.0")     != -1) OSName="Windows 10";
else if (window.navigator.userAgent.indexOf("Windows NT 6.3") != -1) OSName="Windows 8.1";
else if (window.navigator.userAgent.indexOf("Windows NT 6.2") != -1) OSName="Windows 8";
else if (window.navigator.userAgent.indexOf("Windows NT 6.1") != -1) OSName="Windows 7";
else if (window.navigator.userAgent.indexOf("Windows NT 6.0") != -1) OSName="Windows Vista";
else if (window.navigator.userAgent.indexOf("Windows NT 5.1") != -1) OSName="Windows XP";
else if (window.navigator.userAgent.indexOf("Windows NT 5.0") != -1) OSName="Windows 2000";
else if (window.navigator.userAgent.indexOf("Mac")            != -1) OSName="Mac/iOS";
else if (window.navigator.userAgent.indexOf("CrOS")           != -1) OSName="Chrome OS";
else if (window.navigator.userAgent.indexOf("Linux")          != -1) OSName="Linux";


if (OSName != 'Windows XP' && OSName != 'Windows 2000' && OSName != 'Chrome OS') {
    console.log(`OS name is ${OSName}`);
    document.getElementById("osbrowser").innerHTML = `Installations for ${OSName}`;
} else if (OSName == 'Windows XP' || OSName == 'Windows 2000' || OSName == 'Chrome OS') {
    console.log(`Unsupported OS name is ${OSName}`);
    document.getElementById("osbrowser").innerHTML = `${OSName} is an unsupported operating system.`;
    var unsupported = true;
} else {
    console.log("Unknown operating system");
    document.getElementById("osbrowser").innerHTML = `Installations for Unknown`;
    var unknown = true;
}

if (OSName == 'Windows Vista' || OSName == 'Windows 7' || OSName == 'Windows 8' || OSName == 'Windows 8.1' || OSName == 'Windows 10') {
    document.getElementById("installbtns").innerHTML = `<form><button formaction="https://drive.google.com/file/d/1bNBNVpdpjL9kjSB1PvLhyRrH-DlNBHlH/view?usp=sharing"><span class="installZIP">Install Noggle Browser a0.3 <em>(.zip, 5.7 KB)</em></span></button></form>`;
    console.log(`Changed HTML to add download links for ${OSName}`);
} else if (unsupported == true) {
    if (OSName != 'Chrome OS') {
        document.getElementById("installbtns").innerHTML = `<em>Please upgrade your system to Windows 7 or higher to use Noggle Browser</em>`;
        console.log(`Unsupported OS is ${OSName}`);
    } else if (OSName == 'Chrome OS') {
        document.getElementById("installbtns").innerHTML = `<em>Due to Chrome OS being largely based on Android, it is unable to run Python and the required dependencies. You can use Crostini or Crouton to install and run Python and the needed dependencies via Linux.</em>`;
        console.log(`Unsupported OS is ${OSName}`);
    } else {
        document.getElementById("installbtns").innerHTML = `<em>Your OS is not supported. If this is an error, you can still download through the installation portal below.</em>`
    }
}
