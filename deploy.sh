echo "Switching to main branch"
git checkout main

echo "building app..."
npm run build

echo "deploying files to server"
scp -r build/* root@159.65.86.102:/var/www/159.65.86.102/

echo "All done!"