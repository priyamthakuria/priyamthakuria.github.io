import { useParams } from 'react-router-dom';
import './WorkDetail.css';

function WorkDetail() {
  const { id } = useParams();
  
  // In a real app, you'd fetch this data based on the id
  const work = {
    id: 1,
    title: "Designing Dashboards with usability in mind",
    year: "2020",
    category: "Dashboard, User Experience Design",
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    content: [
      {
        type: "paragraph",
        text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {
        type: "image",
        alt: "Dashboard UI"
      },
      {
        type: "heading",
        level: 1,
        text: "Heading 1"
      },
      {
        type: "heading",
        level: 2,
        text: "Heading 2"
      },
      {
        type: "paragraph",
        text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      }
    ]
  };

  return (
    <div className="work-detail-page">
      <div className="work-detail-content-wrapper">
        <div className="work-detail-header">
          <h1 className="work-detail-title">{work.title}</h1>
          <div className="work-detail-meta">
            <span className="work-detail-year">{work.year}</span>
            <span className="work-detail-category">{work.category}</span>
          </div>
          <p className="work-detail-description">{work.description}</p>
        </div>
        
        <div className="work-detail-content">
          <div className="work-detail-image work-detail-image-1">
            <div className="dashboard-preview-large"></div>
          </div>
          
          <h2 className="work-detail-heading">Heading 1</h2>
          <h3 className="work-detail-subheading">Heading 2</h3>
          
          <div className="work-detail-image work-detail-image-2">
            <div className="car-preview"></div>
          </div>
          
          <div className="work-detail-image work-detail-image-3">
            <div className="mobile-preview"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkDetail;

