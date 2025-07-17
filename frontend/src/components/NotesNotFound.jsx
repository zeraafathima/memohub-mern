import { NotebookIcon } from "lucide-react";
import { Link } from "react-router";

const NotesNotFound = () => {
  return (
    <section className="flex flex-col items-center justify-center py-20 px-4 text-center">
      <div className="bg-primary/10 rounded-full p-6 mb-6">
        <NotebookIcon className="size-10 text-primary" />
      </div>

      <h3 className="text-2xl sm:text-3xl font-bold text-base-content mb-2">
        No notes yet
      </h3>

      <p className="text-base text-base-content/70 max-w-md mb-6">
        Ready to organize your thoughts? Start by creating your first note and capture what matters most.
      </p>

      <Link
        to="/create"
        className="btn btn-primary px-6 text-base shadow-md hover:scale-105 transition-transform"
      >
        Create Your First Note
      </Link>
    </section>
  );
};

export default NotesNotFound;
