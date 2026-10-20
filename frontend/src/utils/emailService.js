import emailjs from "@emailjs/browser"


export async function sendEmail(data) {// data is an object

    try{
        console.log("Sending email with data:", data)
      const response = await emailjs.send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        {
            name: data.productName,
            email: data.number,
            message: data.message || "No message provided",
        },
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      );
      return response.status === 200;
    }catch(error){
      console.log(error)
    }

}