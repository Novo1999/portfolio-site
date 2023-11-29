import { Html } from "@react-email/html";
import { Text } from "@react-email/text";
import { Section } from "@react-email/section";
import { Container } from "@react-email/container";

export default function WelcomeEmail(email, subject, message,) {
 return (
  <Html>
   <Section style={main}>
    <Container style={container}>
     <Text style={heading}>You have a mail from {email}</Text>
     <Text style={paragraph}>{subject}</Text>
     <Text style={paragraph}>{message}</Text>
    </Container>
   </Section>
  </Html>
 );
}

// Styles for the email template
const main = {
 backgroundColor: "#ffffff",
};

const container = {
 margin: "0 auto",
 padding: "20px 0 48px",
 width: "580px",
};

const heading = {
 fontSize: "20px",
 lineHeight: "1.3",
 fontWeight: "700",
 color: "#484848",
};

const paragraph = {
 fontSize: "18px",
 lineHeight: "1.4",
 color: "#484848",
};