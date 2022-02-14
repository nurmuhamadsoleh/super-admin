import React, { useState } from "react";

const data = [
    {
        id: 1,
        photo: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200",
        name: "Zaenul Haq",
        jabatan: "SEKDES SIDOGEDUNGBATU",
        kecamatan: "KECAMATAN SANGKAPURA",
        kabupaten: "KABUPATEN GRESIK",
        title: "Selamat pagi Kawan-kawan seperjuangan",
        content: "Semoga senantiasa di beri kesehatan lahir batin dan diberi kesabaran dalam memikul amanah negara",
        date: "06-06-2021",
        time: "09:46:01",
        traffic: 3,
        comment: 1
    },
    {
        id: 2,
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIJF7LAdiF7JlRs24nLsBKz7nWamkcdXPODQ&usqp=CAU",
        name: "Rizki Firmansyah",
        jabatan: "SEKJEN PBB",
        kecamatan: "PALEDENG",
        kabupaten: "KOTA BANDUNG",
        title: "KABAR GEMBIRA!!!",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porta finibus aliquam. Mauris consequat ante sit amet metus pharetra, nec condimentum quam fringilla. Nullam sit amet eros aliquet, consectetur lectus dapibus, varius neque. Praesent quis augue nec justo volutpat vulputate a quis est. Etiam luctus eros id orci convallis lobortis. ",
        date: "06-06-2021",
        time: "09:46:01",
        traffic: 3,
        comment: 1
    },
    {
        id: 3,
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfKrVV1UEnw0p2Rg02dYhn2Qft2hIeY3QmhQ&usqp=CAU",
        name: "Jennifer Wong",
        jabatan: "Bendahara",
        kecamatan: "Cimahi",
        kabupaten: "Kabupaten Cimahi",
        title: "SUDAH PADA TAU???",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porta finibus aliquam. Mauris consequat ante sit amet metus pharetra, nec condimentum quam fringilla. Nullam sit amet eros aliquet, consectetur lectus dapibus, varius neque. Praesent quis augue nec justo volutpat vulputate a quis est. Etiam luctus eros id orci convallis lobortis. ",
        date: "06-06-2021",
        time: "09:46:01",
        traffic: 3,
        comment: 1
    },
    
]

const ForumPage = () => {
    const [response, setResponse] = useState(data)
    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    };
    return (
        <div className="forum-page">
            <div className="header-forum">
                <div>
                    <h5 className="p-3">List Thread</h5>
                </div>
                <hr />
            </div>
            <div className="body-forum">
                <div className="container">
                   {response.map(item => (
                       <div className="card mb-3" key={item.id}>
                       <div className="row">
                           <div className="col-md-3 border-end thread-info">
                               <div className="d-flex justify-content-center mt-5">
                                   <img
                                       src={item.photo}
                                       className="rounded-circle"
                                       style={{ width: "40%", height: "40%" }}
                                       alt="..."
                                   />
                               </div>
                               <div className="text-center biodata mt-2">
                                   <p>{item.name}</p>
                                   <p>{item.jabatan}</p>
                                   <p>{item.kecamatan}</p>
                                   <p>{item.kabupaten}</p>
                               </div>
                           </div>
                           <div className="col-md-9 thread-body">
                               <div className="row">
                                   <div className="col-md-8">
                                       <div className="container">
                                           <div className="card border-0 mt-5">
                                               <h6 className="thread-title">{truncate(item.title, 100)}</h6>
                                               <p className="thread-content">
                                                   {truncate(item.content, 200)}
                                               </p>
                                               <div className="d-flex justify-content-between">
                                                   <div className="d-flex">
                                                       <div className="traffic">
                                                           <i class="far fa-eye me-2"></i>
                                                           <span>{item.traffic}</span>
                                                       </div>
                                                       <div className="comment ms-3">
                                                           <i class="far fa-comment-alt me-2"></i>
                                                           <span>{item.comment}</span>
                                                       </div>
                                                   </div>
                                                   <div className="d-flex text-secondary">
                                                       <div className="date">
                                                           {item.date}
                                                       </div>
                                                       <div className="time ms-3">
                                                           {item.time}
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>

                                       </div>
                                   </div>
                                   <div className="col-md-4">
                                       <div className="d-flex justify-content-center">
                                           <div className="card bg-info mt-5">
                                               <div className="p-5">

                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
                   )
                   )}
                    
                </div>
            </div>
        </div>
    );
};

export default ForumPage;
