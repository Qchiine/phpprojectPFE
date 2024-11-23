import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navdata = () => {

    const history = useNavigate();
    const [isApps, setIsApps] = useState(false);
    const [isForms, setIsForms] = useState(false);
    const [isTables, setIsTables] = useState(false);
    const [iscurrentState, setIscurrentState] = useState('Dashboard');

    function updateIconSidebar(e) {
        if (e && e.target && e.target.getAttribute("subitems")) {
            const ul = document.getElementById("two-column-menu");
            const iconItems = ul.querySelectorAll(".nav-icon.active");
            let activeIconItems = [...iconItems];
            activeIconItems.forEach((item) => {
                item.classList.remove("active");
                var id = item.getAttribute("subitems");
                if (document.getElementById(id))
                    document.getElementById(id).classList.remove("show");
            });
        }
    }

    useEffect(() => {

        document.body.classList.remove('twocolumn-panel');
    
        if (iscurrentState !== 'Apps') {
            setIsApps(false);
        }
        
        if (iscurrentState !== 'Forms') {
            setIsForms(false);
        }
        if (iscurrentState !== 'Tables') {
            setIsTables(false);
        }
    }, [
        history,
        iscurrentState,
        isApps,
        isForms,
        isTables,
    ]);

    const menuItems = [
        {
            label: "Menu",
            isHeader: true,
        },
                {
                    id: "calendar",
                    icon: "ri-apps-2-line",
                    label: "Calendar",
                    link: "/apps-calendar-month-grid",
                    parentId: "apps",
                    
                },
                {
                    id: "chat",
                    icon: "ri-account-circle-line",
                    label: "Chat",
                    link: "/apps-chat",
                    parentId: "apps",
                },
                {
                    id: "mailbox",
                    icon: "ri-pencil-ruler-2-line",
                    label: "Email",
                    link: "/apps-mailbox",
                    parentId: "apps",
                },
                {
                    id: "appsecommerce",
                    icon: "ri-dashboard-2-line",
                    label: "CRUD",
                    link: "/apps-ecommerce-customers",
                    parentId: "apps",
                },
                {
                    id: "appsprojects",
                    icon: "ri-honour-line",
                    label: "View Rapport",
                    link: "/apps-projects-overview",
                    parentId: "apps",
                },
            
                {
                    id: "tasks",
                    icon: "ri-pages-line",
                    label: "List View",
                    link: "/apps-tasks-list-view",
                    parentId: "apps",
                },
                {
                    id: "job",
                    icon: "ri-layout-grid-line",
                    label: "Candiate list",
                    link: "/apps-job-candidate-lists",
                    parentId: "apps",
                },
                {
                id: "filemanager",
                icon: "ri-pages-line",
                label: "File Manager",
                link: "/apps-file-manager",
                parentId: "apps",
            },
            
        {
            label: "Pages",
            isHeader: true,
        },
       
        {
            id: "tables",
            label: "Tables",
            icon: "ri-layout-grid-line",
            link: "/tables-react",
        },
       
    ];
    return <React.Fragment>{menuItems}</React.Fragment>;
};
export default Navdata;