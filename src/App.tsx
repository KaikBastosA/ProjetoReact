import './App.css';
import Header from './components/Header/header';
import Profile from './components/Perfil/perfil';
import Card from './components/Cards/Card';
import Photo1 from './assets/pexels-vinicius-wiesehofer-289347-1130626.jpg';
import Photo2 from './assets/pexels-olly-733872.jpg';
import CommentPhoto1 from './assets/pexels-hannah-nelson-390257-1065084.jpg';
import CommentPhoto2 from './assets/pexels-stefanstefancik-91227.jpg';

function App() {
    const texts = [
        "Lorem ipsum",
        "dolor sit amet. Ex laboriosam dolorem non tempore earum et voluptatem suscipit ut cupiditate nisi est odit voluptates. Nam magni amet ut ipsam molestiae aut facilis minus et quia reiciendis sed excepturi rerum ex consequatur minima! Ex rerum sunt et incidunt officia et veritatis deserunt. Sit soluta laboriosam et incidunt sequi et eius fugiat est temporibus similique rem illum natus sit unde eveniet.",
        "Non quos omnis ut autem labore nam vero consequatur est porro similique ad adipisci quisquam!"
    ];

    const predefinedComments = [
        {
            id: 1,
            text: "Lorem ipsum dolor sit amet",
            time: 10,
            likes: 6,
            pfp: CommentPhoto1,
            name: "Hannah Nelson"
        },
        {
            id: 2,
            text: "Consectetur adipisicing elit",
            time: 820,
            likes: 3,
            pfp: CommentPhoto2,
            name: "Italo Silva"
        }
    ];

    return (
        <section className='ProjectReact'>
            <Header />
            <div className='Feed'>
                <Profile className="profile" />
                <div className="cardsContainer">
                    <Card 
                        className="firstCard"
                        pfp={Photo1}
                        name="Alessandra Graves"
                        role="Front-end Developer"
                        initialTime={60}
                        text={texts}
                        initialComments={predefinedComments}
                    />
                    <Card 
                        className="card"
                        pfp={Photo2}
                        name="Thais Gomes"
                        role="Designer"
                        initialTime={60}
                        text={texts}
                    />
                </div>
            </div>
        </section>
    );
}

export default App;