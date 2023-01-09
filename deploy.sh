
echo "building app..."
npm run build

echo "deploying to server"
scp -r build/* sinezond@sinezondi.com:/domains/sinezondi.com/public_html

echo "All done!"