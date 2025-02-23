import { useState, useEffect } from 'react';
import styles from './style.module.css';
import DefaultPhoto from '../../assets/fotoEu.jpg';

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
    const [likedComments, setLikedComments] = useState<Set<number>>(new Set());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(time => time + 1);
            setComments(comments => comments.map(comment => ({
                ...comment,
                time: comment.time + 1
            })));
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
        if (likedComments.has(id)) {
            setComments(comments.map(comment =>
                comment.id === id ? { ...comment, likes: comment.likes - 1 } : comment
            ));
            setLikedComments(likes => {
                const newLikes = new Set(likes);
                newLikes.delete(id);
                return newLikes;
            });
        } else {
            setComments(comments.map(comment =>
                comment.id === id ? { ...comment, likes: comment.likes + 1 } : comment
            ));
            setLikedComments(new Set(likedComments).add(id));
        }
    };

    const handleDelete = (id: number) => {
        setComments(comments.filter(comment => comment.id !== id));
        setLikedComments(likes => {
            const newLikes = new Set(likes);
            newLikes.delete(id);
            return newLikes;
        });
    };

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

                    <div className={styles.commentContainer}>
                        <div className={styles.commentContent}>
                            <div className={styles.commentHeader}>
                                <div className={styles.userComment}>
                                    <h4>Kaik Bastos</h4>
                                    <p>Cerca de {formatTime(comment.time)}</p>
                                </div>
                                <span
                                    className={`${styles.deleteIcon} material-symbols-outlined`}
                                    onClick={() => handleDelete(comment.id)}
                                >
                                    delete
                                </span>
                            </div>
                            <p>{comment.text}</p>
                        </div>

                        <button
                            className={`${styles.likeButton} ${likedComments.has(comment.id) ? styles.liked : ''}`}
                            onClick={() => handleLike(comment.id)}
                        >
                            <span className="material-symbols-outlined">thumb_up</span>
                            Like • {comment.likes}
                        </button>
                    </div>
                </div>
            ))}

        </section>
    );
}