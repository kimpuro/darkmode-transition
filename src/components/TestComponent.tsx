export default function TestComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="text-white bg-blue-600 dark:text-black dark:bg-amber-300 transition-colors duration-500">
      {children}
    </div>
  );
}
