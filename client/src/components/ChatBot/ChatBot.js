
function Chatbot (props) {

    return (
        <div>
            <df-messenger
            intent="WELCOME"
            chat-title="CovidCat"
            agent-id="a787bafd-5b09-4c7f-929c-b5b6731f5722"
            language-code="es"
            ></df-messenger>
        </div>
    )
}

export default Chatbot