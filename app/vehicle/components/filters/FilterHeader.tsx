interface FilterHeaderProps {
  onClose: () => void;
}

export const FilterHeader = ({ onClose }: FilterHeaderProps) => {
  return (
    <div className="flex items-center justify-between p-4">
      <h3 className="text-2xl font-bold uppercase font-roboto after:content-[''] after:block after:h-[4px] after:bg-primary after:w-[4rem] after:mt-4">
        Filtres avancés
      </h3>
      <button onClick={onClose} />
    </div>
  );
};
