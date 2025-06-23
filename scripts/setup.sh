#!/bin/bash
# Claude Live Development Environment Setup Script

echo "🧠 Claude Live - Environment Setup"
echo "================================="

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "\n${GREEN}1. Creating Python virtual environment...${NC}"
python3 -m venv venv

echo -e "\n${GREEN}2. Activating virtual environment...${NC}"
source venv/bin/activate

echo -e "\n${GREEN}3. Upgrading pip...${NC}"
pip install --upgrade pip

echo -e "\n${GREEN}4. Installing Python dependencies...${NC}"
pip install -r requirements.txt

echo -e "\n${GREEN}5. Installing pre-commit hooks...${NC}"
pip install pre-commit
pre-commit install

echo -e "\n${GREEN}6. Creating .env file from template...${NC}"
if [ ! -f .env ]; then
    cp .env.example .env
    echo -e "${YELLOW}Please edit .env with your API keys and configuration${NC}"
else
    echo ".env already exists, skipping..."
fi

echo -e "\n${GREEN}7. Verifying installation...${NC}"
python --version
node --version
echo "pytest version: $(pytest --version | head -n1)"

echo -e "\n${GREEN}Setup complete!${NC}"
echo -e "\n${YELLOW}Next steps:${NC}"
echo "1. Edit .env with your API keys"
echo "2. Install Docker Desktop for Windows"
echo "3. Install Neo4j Desktop"
echo "4. Run 'source venv/bin/activate' to activate the virtual environment"
echo "5. Run 'pytest' to verify everything is working"