import { useState, useEffect } from 'react';
import styles from './style.module.css';
import DefaultPhoto from '../../assets/fotoEu.jpg'

interface CardProps {
    pfp: string;
    name: string;
    role: string;
    initialTime: number;
    text: string[];
}

interface Comment {
    id: number;
    text: string;
    time: number;
    likes: number;
}

export default function Card({ pfp, name, role, initialTime, text }: CardProps) {
    const [time, setTime] = useState(initialTime);
    const [commentText, setCommentText] = useState('');
    const [comments, setComments] = useState<Comment[]>([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(time => time + 1);
        }, 60000);
        return () => clearInterval(interval);
    }, []);

    const formatTime = (minutes: number) => {
        const hours = Math.floor(minutes / 60);
        const mins = minutes % 60;
        return `${hours}h e ${mins}min`;
    };

    const handleComment = () => {
        if (commentText.trim() === '') return;
        const newComment: Comment = {
            id: Date.now(),
            text: commentText,
            time: 0,
            likes: 0
        };
        setComments([...comments, newComment]);
        setCommentText('');
    };

    const handleLike = (id: number) => {
        setComments(comments.map(comment =>
            comment.id === id ? { ...comment, likes: comment.likes + 1 } : comment
        ));
    }

    const handleDelete = (id: number) => {
        setComments(comments.filter(comment => comment.id !== id));
    }

    return (
        <section className={styles.card}>
            <div className={styles.header}>
                <div className={styles.user}>
                    <img className={styles.pfp} src={pfp} alt={`${name}-feedback`} />
                    <div className={styles.infoUser}>
                        <h3>{name}</h3>
                        <p>{role}</p>
                    </div>
                </div>
                <p>Publicado há {formatTime(time)}</p>
            </div>

            <div className={styles.body}>
                {text.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>

            <div className={styles.commentSection}>
                <h3>Deixe seu feedback</h3>
                <textarea
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    placeholder='Escreva um comentário...'
                />
                <button onClick={handleComment}>Comentar</button>
            </div>

            {comments.map(comment => (
                <div key={comment.id} className={styles.comment}>
                    <img className={styles.commentPfp} src={DefaultPhoto} alt="Comentário" />
                    <div className={styles.commentContent}>
                        <div className={styles.commentHeader}>
                            <h4>Comentador</h4>
                            <p>Comentado há {formatTime(comment.time)}</p>
                            <button onClick={() => handleDelete(comment.id)}>Apagar</button>
                        </div>
                        <p>{comment.text}</p>
                        <button onClick={() => handleLike(comment.id)}>Curtir ({comment.likes})</button>
                    </div>
                </div>
            ))}

        </section>
    );
}
