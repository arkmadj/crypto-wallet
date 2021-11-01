export interface ConverterScreenProps {
  amount: string;
  price: string;
}

const ConverterScreen: React.FC<ConverterScreenProps> = ({ amount, price }) => {
  return (
    <div className="w-1/2">
      <p>You spend</p>
      <div className="flex justify-between text-white font-bold text-xl xl:text-3xl border-b-2 py-2 border-blue-600">
        <div>
          <p>{amount}</p>
        </div>
        <div>
          <p>BTC</p>
        </div>
      </div>
      <div className="flex justify-between">
        <div>
          <p>{price}</p>
        </div>
        <div>
          <p>USD</p>
        </div>
      </div>
    </div>
  );
};

export default ConverterScreen;
