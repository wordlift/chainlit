# This is a simple example of a chainlit app.

from chainlit import (
    AskUserMessage,
    Message,
    ChatSettings,
    chat_settings,
    on_chat_start,
    on_settings_update,
    on_window_message,
    send_window_message,
)
from chainlit.input_widget import (
    TextInput,
)

@on_chat_start
async def main():
    await ChatSettings(
        [
            TextInput(
                id="wordlift_key",
                label="WordLift Key",
                initial=""
            )
        ]
    ).send()
    res = await AskUserMessage(content="What is your name?", timeout=30).send()
    if res:
        await Message(
            content=f"Your name is: {res['output']}.\nChainlit installation is working!\nYou can now start building your own chainlit apps!",
        ).send()


@on_window_message
async def on_window_message(message: Message):
    await Message(
        content=f"Recieved message: {message}",
    ).send()


@on_settings_update
async def on_settings_update(settings):
    await Message(
        content="Settings updated",
    ).send()
    send_window_message({"type": "test", "data": settings})
