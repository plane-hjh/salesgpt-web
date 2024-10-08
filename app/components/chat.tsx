import { ChatInterface } from './chat-interface';
import { GitHubFooter } from './git-hub-footer';

export default function ChatPage() {
    return (
        // This container takes up at least the full height of the viewport
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            {/* Content container should flex-grow to take up available space */}
            <div style={{ flexGrow: 1 }}>
                <ChatInterface />
            </div>
            {/* Footer will automatically be pushed to the bottom */}
            {/* <GitHubFooter /> */}
        </div>
    );
}
