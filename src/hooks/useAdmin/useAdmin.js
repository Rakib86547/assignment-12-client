import { useEffect, useState } from "react";

const useAdmin = email => {
    const [isAdmin, setIsAdmin] = useState(false);

    const [adminLoading, setAdminLoading] = useState(true);
    useEffect(() => {
        if(email) {
            fetch(`https://the-car-masters-server.vercel.app/all_sellers/admin/${email}`)
            .then(res => res.json())
            .then(data => {
                setIsAdmin(data.isAdmin);
                setAdminLoading(false);
            })
        }
    }, [email])
    return [isAdmin, adminLoading];
}
export default useAdmin;