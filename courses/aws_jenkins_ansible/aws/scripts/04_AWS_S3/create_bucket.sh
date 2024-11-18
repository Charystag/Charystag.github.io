# Définissez le nom du bucket et la région
BUCKET_NAME="app-stockage-photos"
REGION="eu-west-3"  # Changez cette valeur selon la région souhaitée
IMAGES=("image1.png" "image2.png" "image3.png")  # Liste des images à télécharger
#USER_ARN="arn:aws:iam::123456789012:user/specific-user"  # Remplacez par l'ARN de l'utilisateur autorisé
ROLE_ARN="arn:aws:iam::354918371346:role/Jenkins-EC2-Role"

# 1. Créer le bucket S3
aws s3api create-bucket --bucket $BUCKET_NAME --region $REGION --create-bucket-configuration LocationConstraint=$REGION
echo "Bucket $BUCKET_NAME créé dans la région $REGION."

# 2. Téléchargez les images dans le bucket
for IMAGE in "${IMAGES[@]}"; do
    aws s3 cp $IMAGE s3://$BUCKET_NAME/
    echo "$IMAGE téléchargée dans le bucket $BUCKET_NAME."
done

# 3. Configurer la politique de contrôle d’accès du bucket
cat > bucket-policy.json <<EOL
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Principal": {
                "AWS": "$ROLE_ARN"
            },
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::$BUCKET_NAME/*"
        }
    ]
}
EOL

aws s3api put-bucket-policy --bucket $BUCKET_NAME --policy file://bucket-policy.json
echo "Politique de contrôle d’accès configurée pour limiter l'accès au bucket $BUCKET_NAME à l'utilisateur spécifié."

# Nettoyage (optionnel) : Supprimez le fichier temporaire de politique
rm bucket-policy.json
