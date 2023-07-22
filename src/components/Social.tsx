import Icon from 'src/components/Icon';

const Social = () => (
  <div className="flex justify-between gap-3">
    <a
      href="https://github.com/theriverman/LearnRegex"
      target="_blank"
      rel="noreferrer"
      aria-label="GitHub"
      className="text-neutral-100 hover:text-regreen-400"
    >
      <Icon icon="github" size={20} />
    </a>
  </div>
);

export default Social;
