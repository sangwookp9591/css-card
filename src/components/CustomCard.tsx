import './Card.css';

const CustomCard = () => {
    return (
        <>
            <div className="container-default">
                <div className={'card-container grid-3-columns'}>
                    <div className={'card card-page'}>
                        <div>
                            <img
                                src={
                                    'https://cdn.prod.website-files.com/6193ce0889184dacb7d96c80/62cf561c2d638a1749798a0d_pages-included-realtor-x-weblfow-template.png'
                                }
                                sizes="(max-width: 479px) 93vw, (max-width: 767px) 94vw, (max-width: 991px) 30vw, (max-width: 1919px) 31vw, 406px"
                                srcSet="https://assets-global.website-files.com/6193ce0889184dacb7d96c80/62cf561c2d638a1749798a0d_pages-included-realtor-x-weblfow-template-p-500.png 500w, https://assets-global.website-files.com/6193ce0889184dacb7d96c80/62cf561c2d638a1749798a0d_pages-included-realtor-x-weblfow-template.png 812w"
                            ></img>
                        </div>
                        <div className={'card-text-wrapper'}>
                            <span className="color-primary">35+</span>
                            Pages
                        </div>
                    </div>
                    <div className={'card card-page'}>
                        <div>
                            <img
                                src={
                                    'https://cdn.prod.website-files.com/6193ce0889184dacb7d96c80/62cf561c2d638a1749798a0d_pages-included-realtor-x-weblfow-template.png'
                                }
                                sizes="(max-width: 479px) 93vw, (max-width: 767px) 94vw, (max-width: 991px) 30vw, (max-width: 1919px) 31vw, 406px"
                                srcSet="https://assets-global.website-files.com/6193ce0889184dacb7d96c80/62cf561c2d638a1749798a0d_pages-included-realtor-x-weblfow-template-p-500.png 500w, https://assets-global.website-files.com/6193ce0889184dacb7d96c80/62cf561c2d638a1749798a0d_pages-included-realtor-x-weblfow-template.png 812w"
                            ></img>
                        </div>
                        <div className={'card-text-wrapper'}>
                            <span className="color-primary">35+</span>
                            Pages
                        </div>
                    </div>
                    <div className={'card card-page'}>
                        <div>
                            <img
                                src={
                                    'https://cdn.prod.website-files.com/6193ce0889184dacb7d96c80/62cf561c2d638a1749798a0d_pages-included-realtor-x-weblfow-template.png'
                                }
                                sizes="(max-width: 479px) 93vw, (max-width: 767px) 94vw, (max-width: 991px) 30vw, (max-width: 1919px) 31vw, 406px"
                                srcSet="https://assets-global.website-files.com/6193ce0889184dacb7d96c80/62cf561c2d638a1749798a0d_pages-included-realtor-x-weblfow-template-p-500.png 500w, https://assets-global.website-files.com/6193ce0889184dacb7d96c80/62cf561c2d638a1749798a0d_pages-included-realtor-x-weblfow-template.png 812w"
                            ></img>
                        </div>
                        <div className={'card-text-wrapper'}>
                            <span className="color-primary">35+</span>
                            Pages
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CustomCard;
