function ProjectTab({ category }: { category: ProjectCategory }) {
  return (
    <div className="tab active capitalize" data-tab="all">
      {category}
    </div>
  );
}

export default ProjectTab;
