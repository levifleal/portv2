import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Preview,
    Text,
    Button,
    Section,
    Hr,
} from '@react-email/components';
import * as React from 'react';

interface ContactNotificationEmailProps {
    name: string;
    email: string;
    message: string;
}

export const ContactEmail = ({
    name,
    email,
    message,
}: ContactNotificationEmailProps) => {
    const previewText = `Nova mensagem de contato de ${name}`;

    return (
        <Html>
            <Head />
            <Preview>{previewText}</Preview>
            <Body style={main}>
                <Container style={container}>
                    <Heading style={h1}>Nova Mensagem de Contato</Heading>
                    <Text style={text}>
                        Você recebeu uma nova mensagem de contato através do seu portfólio.
                    </Text>
                    <Section style={section}>
                        <Text style={sectionTitle}>Detalhes do Remetente:</Text>
                        <Text style={sectionContent}>
                            <strong>Nome:</strong> {name}
                        </Text>
                        <Text style={sectionContent}>
                            <strong>E-mail:</strong> {email}
                        </Text>
                    </Section>
                    <Section style={section}>
                        <Text style={sectionTitle}>Mensagem:</Text>
                        <Text style={messageText}>{message}</Text>
                    </Section>
                    <Hr style={hr} />
                    <Button
                        style={{...button, padding: '20px 12px'}}
                        href={`mailto:${email}`}
                    >
                        Responder
                    </Button>
                </Container>
            </Body>
        </Html>
    );
};

// Estilos inline para garantir compatibilidade com clientes de e-mail
const main = {
    backgroundColor: '#f6f9fc',
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
    backgroundColor: '#ffffff',
    margin: '0 auto',
    padding: '20px 0 48px',
    marginBottom: '64px',
};

const h1 = {
    color: '#333',
    fontSize: '24px',
    fontWeight: 'bold',
    textAlign: 'center' as const,
    margin: '40px 0',
};

const text = {
    color: '#333',
    fontSize: '16px',
    lineHeight: '26px',
};

const section = {
    padding: '24px',
    backgroundColor: '#f6f9fc',
    borderRadius: '4px',
    marginBottom: '24px',
};

const sectionTitle = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '8px',
};

const sectionContent = {
    margin: '0 0 10px 0',
};

const messageText = {
    ...text,
    backgroundColor: '#ffffff',
    padding: '12px',
    borderRadius: '4px',
    border: '1px solid #e0e0e0',
};

const button = {
    backgroundColor: '#22c55e',
    borderRadius: '3px',
    color: '#fff',
    fontSize: '16px',
    textDecoration: 'none',
    textAlign: 'center' as const,
    display: 'block',
    width: '100%',
};

const hr = {
    borderColor: '#e6ebf1',
    margin: '20px 0',
};

export default ContactEmail;