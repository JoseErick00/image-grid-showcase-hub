interface PushPhraseProps {
  text: string;
  color: string;
}

const PushPhrase = ({ text, color }: PushPhraseProps) => {
  return (
    <div className="mb-12 text-center px-4">
      <p 
        className="font-omne-medium text-xl md:text-4xl max-w-[960px] md:max-w-[840px] mx-auto"
        style={{ color }}
      >
        {text}
      </p>
    </div>
  );
};

export default PushPhrase;
