import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore, timestamp } from '../firebase';

const useStorage = (file) => {
    const [progess, setProgess] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        //references
        const storageRef = projectStorage.ref(file.name);
        const collectionRef = projectFirestore.collection('images');

        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgess(percentage);
        }, (err) => {
            setError(err);
        }, async () => {
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            collectionRef.add({url,createdAt})
            setUrl(url);
        })
    }, [file]);

    return { progess, url, error }

}

export default useStorage;