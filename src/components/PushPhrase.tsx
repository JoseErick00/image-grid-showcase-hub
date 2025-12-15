interface PushPhraseProps {
  text: string;
  color?: string;
}

const PushPhrase = ({ text }: PushPhraseProps) => {
  return (
    <div className="my-12 text-center px-4">
      <p 
        className="font-omne-medium text-xl md:text-4xl max-w-[960px] md:max-w-[840px] mx-auto text-white"
      >
        {text}
      </p>
    </div>
  );
};

export default PushPhrase;
