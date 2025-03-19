function ProjectTabList() {
  return (
    <div className="project-tabs">
      <div className="tab active" data-tab="all">
        All Projects
      </div>
      <div className="tab" data-tab="professional">
        Professional
      </div>
      <div className="tab" data-tab="portfolio">
        Portfolio
      </div>
    </div>
  );
}

export default ProjectTabList;
